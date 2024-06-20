import React, { useMemo, useCallback, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import {Editor, Transforms, Element, createEditor } from 'slate';
import Leaf from'./renderLeaf';

const SlateEditor = () => {
const [editor] = useState(() => withReact(createEditor()))

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
  
  const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }
  
  const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
  }


  
    const renderElement = useCallback(props => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />
        default:
          return <DefaultElement {...props} />
      }
    }, [])
   
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, [])
    return (
        <Slate editor={editor} initialValue={initialValue}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={event => {
            if (!event.ctrlKey) {
              return
            }
  
            switch (event.key) {
              // When "`" is pressed, keep our existing code block logic.
              case '`': {
                event.preventDefault()
                const [match] = Editor.nodes(editor, {
                  match: n => n.type === 'code',
                })
                Transforms.setNodes(
                  editor,
                  { type: match ? 'paragraph' : 'code' },
                  { match: n => Editor.isBlock(editor, n) }
                )
                break
              }
  
              // When "B" is pressed, bold the text in the selection.
              case 'b': {
                event.preventDefault()
                Editor.addMark(editor, 'bold', true)
                break
              }
            }
          }}
        />
      </Slate>
    )
  }

export default SlateEditor;
