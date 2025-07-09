/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Why404ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Why404Modal: React.FC<Why404ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up overflow-y-auto"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-2xl w-full max-w-5xl my-8 relative flex flex-col max-h-[calc(100vh-4rem)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors bg-white/90 dark:bg-neutral-800/90 rounded-full p-2 backdrop-blur-sm"
        >
          <X size={20} className='cursor-pointer hover:text-red-400 h-6 w-6 text-black dark:text-white dark:hover:text-red-400'/>
        </button>

        {/* Modal Content - Now with proper scrolling */}
        <div className="flex flex-col lg:flex-row h-full min-h-0">
          {/* Left: Image */}
          <div className=" lg:w-1/3 border-b lg:border-b-0 lg:border-r flex-shrink-0 w-full p-6 flex items-center justify-center border-r border-gray-200 dark:border-gray-600">
            <img 
              src="/4o4.jpg" 
              alt="Why 4o4" 
              className="w-full max-w-full h-60 object-cover rounded-lg shadow-md lg:max-w-90 lg:h-90" 
            />
          </div>

          {/* Right: Text Content - Scrollable Area */}
          <div className="w-full lg:w-2/3 flex flex-col min-h-0">
            <div className="p-6 overflow-y-auto flex-1">
              <h3 className="font-semibold text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-white">
                Why &quot;4O4&quot;?
              </h3>
              
              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 mb-4 text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100 bg-blue-50 dark:bg-blue-900/20 py-3 rounded-r-lg">
                &quot;4O4&quot; is a creative nod to the familiar <span className='text-red-400'>&apos;404 Not Found&apos;</span> error symbolizing unrealized ideas. We exist to turn those missing pieces into finished, functional realities.
              </blockquote>
              
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                In the web world, <span className="font-bold text-red-600 dark:text-red-400">4O4</span> means &quot;Not Found&quot;—a page that exists in theory but hasn&apos;t been built yet.<br/>
                That moment of absence captures exactly what we solve:
              </p>
              
              <blockquote className="border-l-4 border-green-500 dark:border-green-400 pl-4 mb-4 text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100 bg-green-50 dark:bg-green-900/20 py-3 rounded-r-lg">
                Your ideas are out there, but the execution is missing. We turn those &quot;not-found&quot; concepts into fully deployed reality.
              </blockquote>
              
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                By naming our studio 4O4, we make a public promise:
              </p>
              
              <ol className="list-decimal list-inside text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4">
                <li className='font-bold text-black dark:text-white'>We start where others stop.</li>
                <li className='font-bold text-black dark:text-white'>We embrace the gap.</li>
                <li className='font-bold text-black dark:text-white'>We leave no idea unfound.</li>
              </ol>
              
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Practically, the name keeps us honest: every time we see &quot;4O4,&quot; we&apos;re reminded to hunt down the unknowns, close the loops, and make sure nothing our clients care about ends up &quot;not found.&quot;
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why404Modal;