import React, { useState, useRef } from "react"
import DefaultButton from "../../DefaultButton"

const FooterForm = () => {
  // The below hooks are useRef hooks
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const submitRef = useRef(null)
  const [value, setValue] = useState("")

  const nameKeyDown = () => {
    emailRef.current.focus()
  }
  const emailKeyDown = () => {
    messageRef.current.focus()
  }
  const messageKeyDown = () => {
    submitRef.current.focus()
  }
  const updateText = text => {
    setValue(value => text)
  }
  return (
    <div className="pt-20 pr-6 xl:pt-12">
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <input
          type="text"
          ref={nameRef}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              nameKeyDown()
            }
          }}
          placeholder="Your name here"
          className="w-full bg-primary capitalize border-b-2 focus:border-secondary focus:text-secondary"
        />
        <input
          type="email"
          ref={emailRef}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              emailKeyDown()
            }
          }}
          onChange={e => {
            updateText(e.target.value)
          }}
          placeholder="Your email here"
          className="pt-12 w-full bg-primary border-b-2 focus:border-secondary focus:text-secondary"
        />
        <div>
          <p className="pt-2 text-sm opacity-100 h-16 md:hidden">{value}</p>
          <div className="flex justify-end md:pt-6">
            <button>
              <DefaultButton buttonText="add attachment" />
            </button>
          </div>
        </div>

        <input
          type="text"
          ref={messageRef}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              messageKeyDown()
            }
          }}
          placeholder="Your message here"
          className="pt-12 w-full bg-primary border-b-2 focus:border-secondary focus:text-secondary"
        />
        <div className="pt-16">
          <button ref={submitRef}>
            <DefaultButton buttonText="submit form" fullButton="show" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default FooterForm
