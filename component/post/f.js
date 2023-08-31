import { useRef, useState } from 'react';
import classes from './postForm.module.css';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import hljs from 'highlight.js';
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/github.css'; // Import a style (you can choose a different style)
import javascript from 'highlight.js/lib/languages/javascript';
hljs.configure({   // optionally configure hljs
  languages: ['javascript', 'ruby', 'python']
});


// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
 



function PostForm() {

  const titleInputRef = useRef();
  const imageInputRef = useRef();

  const categoryInputRef = useRef();




  const router = useRouter();

  const [content, setContent] = useState('')
  const onChange = (text) => setContent(text)
  async function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const enteredCategory = categoryInputRef.current.value;

    const enteredDescription = content


    const data = {
      title: enteredTitle,
      image: enteredImage,

      category: enteredCategory,

      description: enteredDescription,
    };

    console.log(data)
    const response = await fetch('api/admin/admin-post', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    })
    let newPostData = await response.json()

    if (!response.ok) {
      throw new Error(newPostData.message || 'something went wrong')
    }

    router.reload()



  }

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Post Title</label>
          <input type='text' required id='title' ref={titleInputRef} name='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Post Image</label>
          <input type='url' required id='image' ref={imageInputRef} name='image' placeholder='http....' />
        </div>

        <div className={classes.control}>
          <label htmlFor='category'>Post Category</label>
          <input type='text' required id='category' ref={categoryInputRef} name='category' />
        </div>


        <div className={classes.control}>
          <label htmlFor='description'>Post Description</label>

          <ReactQuill
            onChange={onChange}
            defaultValue={''}
            modules={{
              toolbar: [
                { font: [] },
                ['code-block'],
                { header: [1, 2, 3, 4, 5, 6, false] },
                ['bold', 'italic', 'underline', 'strike'],
                { color: [] }, { background: [] },
                { script: 'sub' }, { script: 'super' },
                ['blockquote', 'code-block'],
                { list: 'ordered' }, { list: 'bullet' },
                { indent: '-1' }, { indent: '+1' }, { align: [] },
                ['link', 'image', 'video'],
                ['clean'],
              ],
            }}
            formats={['header', 'bold', 'italic', 'underline', 'strike', 'color', 'background', 'script', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'align', 'link', 'image', 'video']}
            renderCustomBlock={(props, _quill, _range, _options) => {
              if (props["code-block"]) {
                const highlightedCode = hljs.highlightAuto(props["code-block"]).value;
                return (
                  <pre>
                    <code
                      className={`hljs ${props.language || "plaintext"}`}
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                  </pre>
                );
              }
              return null;
            }}
          />
        </div>

        <div className={classes.actions}>
          <button type='submit'> Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
