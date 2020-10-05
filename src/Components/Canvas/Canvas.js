import React, { useState, useEffect } from 'react';
import "./Canvas.css";
import firebase from "firebase";
import { db } from '../../firebase';
import { useStateValue } from '../Provider/StateProvider';
import { useHistory } from 'react-router-dom';

function Canvas() {
  const [canvas, setCanvas] = useState([]);
  const history = useHistory();
  const [{ user, userHash, canvasId }, dispatch] = useStateValue();

  const [inputTitle, setInputTitle] = useState("");
  const [inputConcept, setInputConcept] = useState("");
  const [inputPartners, setInputPartners] = useState("");
  const [inputKeyaction, setInputKeyaction] = useState("");
  const [inputResource, setInputResource] = useState("");
  const [inputValueProposition, setInputValueProposition] = useState("");
  const [inputRelationship, setInputRelationship] = useState("");
  const [inputChannel, setInputChannel] = useState("");
  const [inputTargets, setInputTargets] = useState("");
  const [inputFuture, setInputFuture] = useState("");
  const [inputCostRevenue, setInputCostRevenue] = useState("");
  const [inputProfits, setInputProfits] = useState("");

  function clearCanvas() {
    setCanvas({id: "", contents: {
      title: "",
      concept: "",
      partners: "",
      keyaction: "",
      resource: "",
      valueProposition: "",
      relationship: "",
      channel: "",
      targets: "",
      future: "",
      costRevenue: "",
      profits: "",
    }});
  }

  const clearBmc = e => {
    e.preventDefault();

    clearCanvas();

    setInputTitle(canvas.contents?.title)
    setInputPartners(canvas.contents?.partners)
    setInputKeyaction(canvas.contents?.keyaction)
    setInputResource(canvas.contents?.resource)
    setInputValueProposition(canvas.contents?.valueProposition)
    setInputRelationship(canvas.contents?.relationship)
    setInputChannel(canvas.contents?.channel)
    setInputTargets(canvas.contents?.targets)
    setInputFuture(canvas.contents?.future)
    setInputCostRevenue(canvas.contents?.costRevenue)
    setInputProfits(canvas.contents?.profits)

    dispatch({
      type: 'SET_CANVAS',
      canvasId: null
    })
    
    history.push(`/canvas/${user.displayName}/`);
  }

  const saveBmc = e => {
    e.preventDefault();

    if(userHash && canvasId){
      db.collection("user").doc(userHash)
        .collection("canvas")
        .doc(canvasId).set({
        title: inputTitle,
        concept: inputConcept,
        partners: inputPartners,
        keyaction: inputKeyaction,
        resource: inputResource,
        valueProposition: inputValueProposition,
        relationship: inputRelationship,
        channel: inputChannel,
        targets: inputTargets,
        future: inputFuture,
        costRevenue: inputCostRevenue,
        profits: inputProfits,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }) 
    }else if(userHash) {
      db.collection("user").doc(userHash)
      .collection("canvas").add({
        title: inputTitle,
        concept: inputConcept,
        partners: inputPartners,
        keyaction: inputKeyaction,
        resource: inputResource,
        valueProposition: inputValueProposition,
        relationship: inputRelationship,
        channel: inputChannel,
        targets: inputTargets,
        future: inputFuture,
        costRevenue: inputCostRevenue,
        profits: inputProfits,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  };

  useEffect(() => {
    if(userHash && canvasId){
      db.collection("user").doc(userHash)
      .collection("canvas").doc(canvasId).onSnapshot(snapshot => {
        if(snapshot.exists) {
          setCanvas({id: canvasId, contents: snapshot.data()})
        }else {
          clearCanvas();
        }
      })
     }else{
      clearCanvas();
     }
  }, [userHash, canvasId])

  useEffect(() => {
    setInputTitle(canvas.contents?.title)
    setInputPartners(canvas.contents?.partners)
    setInputKeyaction(canvas.contents?.keyaction)
    setInputResource(canvas.contents?.resource)
    setInputValueProposition(canvas.contents?.valueProposition)
    setInputRelationship(canvas.contents?.relationship)
    setInputChannel(canvas.contents?.channel)
    setInputTargets(canvas.contents?.targets)
    setInputFuture(canvas.contents?.future)
    setInputCostRevenue(canvas.contents?.costRevenue)
    setInputProfits(canvas.contents?.profits)
  }, [canvas])

  return (
    <div className="canvas">
      <form>
        <div className="canvas__title">
          <input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="input your business model title"
          />
        </div>
        <div className="canvas__top">
          <div className="canvas__topcontent">
            <span className="canvas__contenttitle">Concept</span>
            <textarea
              rows="2"
              value={inputConcept}
              onChange={(e) => setInputConcept(e.target.value)}
              placeholder="input your business concept. This is the direction of your business!!"
              className="canvas__topcontentdescription"
            />
          </div>
        </div>
        <div className="canvas__contentframe">
          <div className="canvas__content">
            <span className="canvas__contenttitle">Partners</span>
            <textarea
              rows="21"
              value={inputPartners}
              onChange={(e) => setInputPartners(e.target.value)}
              placeholder="input text"
              className="canvas__contentdescription"
            />
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">Key action</span>
              <textarea
                rows="8"
                value={inputKeyaction}
                onChange={(e) => setInputKeyaction(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Resource</span>
              <textarea
                rows="8"
                value={inputResource}
                onChange={(e) => setInputResource(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
          </div>
          <div className="canvas__content">
            <span className="canvas__contenttitle">Value proposition</span>
            <textarea
              rows="21"
              value={inputValueProposition}
              onChange={(e) => setInputValueProposition(e.target.value)}
              placeholder="input text"
              className="canvas__contentdescription"
            />
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">Relationship</span>
              <textarea
                rows="8"
                value={inputRelationship}
                aria-label="maximum height"
                onChange={(e) => setInputRelationship(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Channel</span>
              <textarea
                rows="8"
                value={inputChannel}
                onChange={(e) => setInputChannel(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
          </div>
          <div className="canvas__rowcontents">
            <div className="canvas__rowupper">
              <span className="canvas__contenttitle">Targets</span>
              <textarea
                rows="8"
                value={inputTargets}
                onChange={(e) => setInputTargets(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Future</span>
              <textarea
                rowsMax="8"
                value={inputFuture}
                onChange={(e) => setInputFuture(e.target.value)}
                placeholder="input text"
                className="canvas__rowcontentdescription"
              />
            </div>
          </div>  
        </div>
        <div className="field__canvascostsframe">
          <div className="canvas__costcontent">
            <span className="canvas__contenttitle">Cost revenue</span>
            <textarea
              rows="6"
              value={inputCostRevenue}
              onChange={(e) => setInputCostRevenue(e.target.value)}
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
          <div className="canvas__costcontent">
            <span className="canvas__contenttitle">Profits</span>
            <textarea
              rows="6"
              value={inputProfits}
              onChange={(e) => setInputProfits(e.target.value)}
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
        </div>
        <div className="canvas__buttonWrapper">
          <button type="submit" onClick={clearBmc} className="canvas__button">Clear</button>
          <button type="submit" onClick={saveBmc} className="canvas__button">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Canvas;
