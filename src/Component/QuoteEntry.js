import React from 'react'

const quotes =
  [
    "Always believe in your self ",
    "Man know thy self",
    "It pays to serve God",
    "The fear of God is the begining f wisdom",
  ]

function QuoteEntry() {
  const [quoter, setQuoter] = React.useState(0)


  return (
    <div>
      <div style={{
        marginTop: "50px",
        marginBottom: "150px",
        fontFamily: "Poppins",
        fontSize: "26px",
      }}>
        This is the best quote
     </div>
      <div style={{
        marginTop: "150px ",
        fontFamily: "Poppins",
        fontSize: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}

        onClick={() => {
          setQuoter(quoter + 1)
          console.log(quotes[0])
        }}

      >
        {quotes[quoter % quotes.length]}
      </div>
    </div>
  )
}

export default QuoteEntry
