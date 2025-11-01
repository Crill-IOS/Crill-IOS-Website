import { useEffect, useRef, useState } from 'react';

interface MonacoEditorProps {
  className?: string;
  initialCode?: string;
}

export default function MonacoEditor({ className, initialCode }: MonacoEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<any>(null);
  const isMountedRef = useRef(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const initEditor = async () => {
    if (!editorRef.current) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const { configureMonacoWorkers } = await import('@/langium/setup/setupCommon');
      const { executeExtended } = await import('@/langium/setup/setupExtended');
      
      configureMonacoWorkers();
      
      const wrapper = await executeExtended(editorRef.current!, initialCode);
      if (isMountedRef.current) {
        wrapperRef.current = wrapper;
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error('Failed to initialize Monaco editor:', error);
      if (isMountedRef.current) {
        setError(error?.message || 'Fehler beim Laden des Editors');
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    initEditor();

    return () => {
      isMountedRef.current = false;
      if (wrapperRef.current) {
        try {
          if (typeof wrapperRef.current.dispose === 'function') {
            wrapperRef.current.dispose();
          }
        } catch (error) {
          console.error('Error disposing Monaco editor:', error);
        }
        wrapperRef.current = null;
      }
    };
  }, [initialCode]);

  if (error) {
    return (
      <div 
        className={className}
        style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', padding: '2rem' }}
      >
        <p className="text-muted-foreground text-center">
          Der Monaco Editor konnte nicht geladen werden.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          {error}
        </p>
        <button
          onClick={() => {
            setError(null);
            setIsLoading(true);
            if (editorRef.current) {
              initEditor();
            }
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Erneut versuchen
        </button>
      </div>
    );
  }

  return (
    <div 
      ref={editorRef} 
      className={className}
      style={{ height: '100%', width: '100%', position: 'relative' }}
    >
      {isLoading && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        }}>
          <p className="text-muted-foreground">Editor wird geladen...</p>
        </div>
      )}
    </div>
  );
}

