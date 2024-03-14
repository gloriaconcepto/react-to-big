import React from 'react';

const BackGround = () => {
    const [dotColor, setDotColor] = React.useState('#fffff');
    const dotBackgroundColorSelector = (colorCode) => {
        if (colorCode) {
          setDotColor(colorCode)
        }
      }
    return (<>
        <div className='flex-row'>
            <span className="dot-1" onClick={() => dotBackgroundColorSelector('#4b4be5')}></span>
            <span className="dot-2" onClick={() => dotBackgroundColorSelector('#ffa500')}></span>
            <span className="dot-3" onClick={() => dotBackgroundColorSelector('#ee82ee')}></span>
            <span className="dot-4" onClick={() => dotBackgroundColorSelector('#3cb371')}></span>
        </div>
        <div style={{ backgroundColor: `${dotColor}` }} className='bg-div'>

        </div>
    </>)
}
export default BackGround