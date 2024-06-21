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
              // When "B" is pressed, bold the text in the selection.
              case 'b': {
                event.preventDefault()
                Editor.addMark(editor, 'bold', true)
                break
              }
              case 'i':{
                event.preventDefault()
                
                Editor.addMark(editor, 'italic', true)
                break
              }
              case 'u':{
                event.preventDefault()
                
                Editor.addMark(editor, 'underline', true)
                break
                
              }
              case 's':{
                event.preventDefault()
                
                Editor.addMark(editor, 'strike', true)
                break
              }
            }
          }}
        />
      </Slate>
    )
  }

export default SlateEditor;