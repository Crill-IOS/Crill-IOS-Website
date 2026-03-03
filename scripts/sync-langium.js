#!/usr/bin/env node

/**
 * Script to sync compiled language files from Crill-IOS-Scripting to Crill-IOS-Website
 * 
 * Usage: node scripts/sync-langium.js
 * 
 * This script copies the compiled .js files from the Scripting project's out/ directory
 * to the Website project's src/langium/language directory.
 */

import { cp, rm, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the Scripting project path: scripts/ -> Website/ -> ../Crill-IOS-Scripting
const SCRIPTING_PROJECT = join(__dirname, '../../../Crill-IOS-Scripting');
const WEBSITE_PROJECT = join(__dirname, '..');

const SOURCE_DIR = join(SCRIPTING_PROJECT, 'out/language');
const TARGET_DIR = join(WEBSITE_PROJECT, 'src/langium/language');

async function removeFile(filePath) {
  try {
    await rm(filePath, { force: true });
  } catch (error) {
    // Ignore if file doesn't exist
  }
}

async function syncFiles() {
  try {
    console.log('🔄 Syncing language files from Scripting to Website...');
    
    // Copy all .js files (only files that exist)
    const filesToCopy = [
      'cisco-ios-completionProvider.js',
      'cisco-ios-linker.js',
      'cisco-ios-module.js',
      'cisco-ios-preprocessor.js',
      'cisco-ios-scopeProvider.js',
      'cisco-ios-semanticTokenProvider.js',
      'cisco-ios-validator.js',
      'main-browser.js',
      'cisco-ios-documentValidator.js',
      'cisco-ios-hoverProvider.js'
    ];
    
    for (const file of filesToCopy) {
      const sourcePath = join(SOURCE_DIR, file);
      const targetPath = join(TARGET_DIR, file);
      
      // Copy file
      await cp(sourcePath, targetPath, { force: true });
      
      // Fix relative node_modules imports to use package imports instead
      const content = await readFile(targetPath, 'utf-8');
      const fixedContent = content.replace(
        /from\s+["']\.\.\/\.\.\/node_modules\/([^"']+)["']/g,
        (match, pkg) => `from "${pkg}"`
      );
      
      if (content !== fixedContent) {
        await writeFile(targetPath, fixedContent, 'utf-8');
        console.log(`  ✓ Copied and fixed imports in ${file}`);
      } else {
        console.log(`  ✓ Copied ${file}`);
      }
      
      // Copy corresponding .map file if it exists
      const mapFile = file + '.map';
      const sourceMapPath = join(SOURCE_DIR, mapFile);
      const targetMapPath = join(TARGET_DIR, mapFile);
      try {
        await cp(sourceMapPath, targetMapPath, { force: true });
      } catch (error) {
        // Source map doesn't exist, that's okay
      }
    }
    
    // Copy generated files
    const generatedFiles = ['ast.js', 'grammar.js', 'module.js'];
    for (const file of generatedFiles) {
      const sourcePath = join(SOURCE_DIR, 'generated', file);
      const targetPath = join(TARGET_DIR, 'generated', file);
      await cp(sourcePath, targetPath, { force: true });
      console.log(`  ✓ Copied generated/${file}`);
      
      // Copy corresponding .map file if it exists
      const mapFile = file + '.map';
      const sourceMapPath = join(SOURCE_DIR, 'generated', mapFile);
      const targetMapPath = join(TARGET_DIR, 'generated', mapFile);
      try {
        await cp(sourceMapPath, targetMapPath, { force: true });
      } catch (error) {
        // Source map doesn't exist, that's okay
      }
    }
    
    // Copy details JSON files
    await cp(
      join(SOURCE_DIR, 'details/Command_Details.json'),
      join(TARGET_DIR, 'details/Command_Details.json'),
      { force: true }
    );
    console.log(`  ✓ Copied details/Command_Details.json`);
    
    console.log('✅ Sync completed successfully!');
    console.log('💡 Remember to rebuild the Scripting project first: cd ../Crill-IOS-Scripting && npm run build');
  } catch (error) {
    console.error('❌ Error syncing files:', error);
    process.exit(1);
  }
}

syncFiles();

