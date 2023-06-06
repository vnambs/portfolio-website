import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

/**
 * > It will show a code block with a code snippet. Great for presenting code snippets.
 */

interface CodeBlockProps {
  /**
   * The code snippet that needs to be shown.
   */
  children: ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <pre className="static flex w-full justify-center whitespace-normal rounded-xl border border-gray-300 bg-gray-200 p-4 dark:bg-zinc-800/30 lg:w-auto">
      {children}
    </pre>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CodeBlock;
