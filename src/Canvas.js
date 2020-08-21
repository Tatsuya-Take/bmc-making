import React from 'react';
import "./Canvas.css"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function Field() {
  return (
    <div className="canvas">
      <form>
        <div className="canvas__top">
          <div className="canvas__topcontent">
            <span className="canvas__contenttitle">concept</span>
            <TextareaAutosize
              rowsMax={2}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__topcontentdescription"
            />
          </div>
        </div>
        <div className="canvas__contentframe">
          <div className="canvas__content">
            <span className="canvas__contenttitle">partner</span>
            <TextareaAutosize
              rowsMax={21}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__contentdescription"
            />
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">keyaction</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">resource</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
          </div>
          <div className="canvas__content">
            <span className="canvas__contenttitle">value proposition</span>
            <TextareaAutosize
              rowsMax={21}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__contentdescription"
            />
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">relationship</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">channel</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">targets</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">future</span>
              <TextareaAutosize
              rowsMax={8}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
          </div>  
        </div>
        <div className="field__canvascostsframe">
          <div className="canvas__costcontent">
            <span className="canvas__contenttitle">cost revenue</span>
            <TextareaAutosize
              rowsMax={6}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
          <div className="canvas__costcontent">
            <span className="canvas__contenttitle">profits</span>
            <TextareaAutosize
              rowsMax={6}
              aria-label="maximum height"
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Field;
