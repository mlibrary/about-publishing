import React from 'react'


export const wrapPageElement = ({ element }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
      <React.Fragment>
        <div
          css={{
            minHeight: '100%',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gridTemplateColumns: '100%',
          }}
        >
          <div>
            <m-universal-header></m-universal-header>
          </div>
	  <div>
            {element}
	  </div>
        </div>
      </React.Fragment>
    )
  }
