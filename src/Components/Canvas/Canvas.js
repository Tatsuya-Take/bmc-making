import React, { useState, useEffect } from 'react';
import "./Canvas.css";
import firebase from "firebase";
import { db } from '../../firebase';
import { useStateValue } from '../Provider/StateProvider';
import { useParams } from 'react-router-dom';

function Canvas() {
  const [canvas, setCanvas] = useState([]);
  const [{ user }] = useStateValue();
  const { disPlayName, canvasId } = useParams();

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
    setCanvas({id: "", canvas: {
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

  const saveBmc = e => {
    e.preventDefault();

    if(user && canvasId && canvasId !== 'default'){
      db.collection("user").doc(user?.email)
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
    }else {
      db.collection("user").doc(user?.email)
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
    if(user && canvasId){
      db.collection("user").doc(user?.email)
      .collection("canvas").doc(canvasId).onSnapshot(snapshot => {
        if(snapshot.exists) {
          setCanvas({id: canvasId, canvas: snapshot.data()})
          console.log(canvas)
        }else {
          clearCanvas();
        }
      })
     }else{
      clearCanvas();
     }
  }, [user, canvasId])

  return (
    <div className="canvas">
      <form>
        <div className="canvas__title">
          <input
            value={canvas.title}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="input your business model title"
          />
        </div>
        <div className="canvas__top">
          <div className="canvas__topcontent">
            <span className="canvas__contenttitle">Concept</span>
            <textarea
              rows="2"
              onChange={(e) => setInputConcept(e.target.value)}
              placeholder="input your business concept. This is the direction of your business!!"
              className="canvas__topcontentdescription"
            >{canvas.concept}</textarea>
          </div>
        </div>
        <div className="canvas__contentframe">
          <div className="canvas__content">
            <span className="canvas__contenttitle">Partners</span>
            <textarea
              rows="21"
              value={canvas.partners}
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
              value={canvas.keyaction}
              onChange={(e) => setInputKeyaction(e.target.value)}
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Resource</span>
              <textarea
              rows="8"
              value={canvas.resource}
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
              value={canvas.valueProposition}
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
              aria-label="maximum height"
              value={canvas.relationship}
              onChange={(e) => setInputRelationship(e.target.value)}
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Channel</span>
              <textarea
              rows="8"
              value={canvas.channel}
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
              value={canvas.targets}
              onChange={(e) => setInputTargets(e.target.value)}
              placeholder="input text"
              className="canvas__rowcontentdescription"
            />
            </div>
            <div className="canvas__rowlower">
              <span className="canvas__contenttitle">Future</span>
              <textarea
              rowsMax="8"
              value={canvas.future}
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
              value={canvas.costRevenue}
              onChange={(e) => setInputCostRevenue(e.target.value)}
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
          <div className="canvas__costcontent">
            <span className="canvas__contenttitle">Profits</span>
            <textarea
              rows="6"
              value={canvas.profits}
              onChange={(e) => setInputProfits(e.target.value)}
              placeholder="input text"
              className="canvas__costcontentdescription"
            />
          </div>
        </div>
        <div className="canvas__buttonWrapper">
          <button type="submit" onClick={saveBmc} className="canvas__saveButton">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Canvas;
