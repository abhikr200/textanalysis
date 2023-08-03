import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'#042743':'white',

    }

    



  return (
    <div classNameName='container' >
        <h1 style={myStyle}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong> TextAnalysis</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count, conversion to Uppercase, Lowercase, Copy Text, etc. 
         This is a free character counter tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
         This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
  
    
  
      </div>
    </div>
  
  )
}
