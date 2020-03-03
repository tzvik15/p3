import React from "react";
import "./board.css";

function Board(props) {







  return (
    <>
      <span
        className="pawn1"
        style={{
         
         left: props.p1pos===0?50:props.p1pos===1?80: props.p1pos===2 ? 180 : props.p1pos===3 ? 280 : props.p1pos===4 ? 380: props.p1pos===5 ? 480: props.p1pos===6 ? 480: props.p1pos===7 ? 480 :props.p1pos===8 ? 480:props.p1pos===9 ? 480: props.p1pos===10 ? 380:props.p1pos===11 ? 280: props.p1pos===12 ? 180: props.p1pos===13 ? 80:props.p1pos===14 ? 80:props.p1pos===15 ? 80:props.p1pos===16 ? 80:props.p1pos===17 ? 180:props.p1pos===18 ? 280:props.p1pos===19 ? 380:props.p1pos===20 ? 380:props.p1pos===21 ? 380: props.p1pos===22 ? 280:props.p1pos===23 ? 180:props.p1pos===24 ? 180: 280,
         
          top: props.p1pos===0?140:props.p1pos===1?140: props.p1pos===2 ? 140 : props.p1pos===3 ? 140 : props.p1pos===4 ? 140: props.p1pos===5 ? 140: props.p1pos===6 ? 240: props.p1pos===7 ? 340 :props.p1pos===8 ? 440:props.p1pos===9 ? 540: props.p1pos===10 ? 540:props.p1pos===11 ? 540: props.p1pos===12 ? 540: props.p1pos===13 ? 540:props.p1pos===14 ? 440:props.p1pos===15 ? 340:props.p1pos===16 ? 240:props.p1pos===17 ? 240:props.p1pos===18 ? 240:props.p1pos===19 ? 240:props.p1pos===20 ? 340:props.p1pos===21 ? 440: props.p1pos===22 ? 440:props.p1pos===23 ? 440:props.p1pos===24 ? 340: 340,
        }}
      ></span>
          <span
        className="pawn2"
        style={{
         
         left: props.p2pos===0?30:props.p2pos===1?100: props.p2pos===2 ? 200 : props.p2pos===3 ? 300 : props.p2pos===4 ? 400: props.p2pos===5 ? 500: props.p2pos===6 ? 500: props.p2pos===7 ? 500 :props.p2pos===8 ? 500:props.p2pos===9 ? 500: props.p2pos===10 ? 400:props.p2pos===11 ? 300: props.p2pos===12 ? 200: props.p2pos===13 ? 100:props.p2pos===14 ? 100:props.p2pos===15 ? 100:props.p2pos===16 ? 100:props.p2pos===17 ? 200:props.p2pos===18 ? 300:props.p2pos===19 ? 400:props.p2pos===20 ? 400:props.p2pos===21 ? 400: props.p2pos===22 ? 300:props.p2pos===23 ? 200:props.p2pos===24 ? 200: 300,
        
          top: props.p1pos===0?140:props.p2pos===1?140: props.p2pos===2 ? 140 : props.p2pos===3 ? 140 : props.p2pos===4 ? 140: props.p2pos===5 ? 140: props.p2pos===6 ? 240: props.p2pos===7 ? 340 :props.p2pos===8 ? 440:props.p2pos===9 ? 540: props.p2pos===10 ? 540:props.p2pos===11 ? 540: props.p2pos===12 ? 540: props.p2pos===13 ? 540:props.p2pos===14 ? 440:props.p2pos===15 ? 340:props.p2pos===16 ? 240:props.p2pos===17 ? 240:props.p2pos===18 ? 240:props.p2pos===19 ? 240:props.p2pos===20 ? 340:props.p2pos===21 ? 440: props.p2pos===22 ? 440:props.p2pos===23 ? 440:props.p2pos===24 ? 340: 340,
        }}
      ></span>
         <span
        className="pawn3"
        style={{
         
         left: props.p3pos===0?30:props.p3pos===1?100: props.p3pos===2 ? 200 : props.p3pos===3 ? 300 : props.p3pos===4 ? 400: props.p3pos===5 ? 500: props.p3pos===6 ? 500: props.p3pos===7 ? 500 :props.p3pos===8 ? 500:props.p3pos===9 ? 500: props.p3pos===10 ? 400:props.p3pos===11 ? 300: props.p3pos===12 ? 200: props.p3pos===13 ? 100:props.p3pos===14 ? 100:props.p3pos===15 ? 100:props.p3pos===16 ? 100:props.p3pos===17 ? 200:props.p3pos===18 ? 300:props.p3pos===19 ? 400:props.p3pos===20 ? 400:props.p3pos===21 ? 400: props.p3pos===22 ? 300:props.p3pos===23 ? 200:props.p3pos===24 ? 200: 300,
        
          top: props.p3pos===0?160:props.p3pos===1?160: props.p3pos===2 ? 160 : props.p3pos===3 ? 160 : props.p3pos===4 ? 160: props.p3pos===5 ? 160: props.p3pos===6 ? 260: props.p3pos===7 ? 360 :props.p3pos===8 ? 460:props.p3pos===9 ? 560: props.p3pos===10 ? 560:props.p3pos===11 ? 560: props.p3pos===12 ? 560: props.p3pos===13 ? 560:props.p3pos===14 ? 460:props.p3pos===15 ? 360:props.p3pos===16 ? 260:props.p3pos===17 ? 260:props.p3pos===18 ? 260:props.p3pos===19 ? 260:props.p3pos===20 ? 360:props.p3pos===21 ? 460: props.p3pos===22 ? 460:props.p3pos===23 ? 460:props.p3pos===24 ? 360: 360,
        }}
      ></span>
      <span
        className="pawn4"
        style={{
         
         left: props.p4pos===0?50:props.p4pos===1?80: props.p4pos===2 ? 180 : props.p4pos===3 ? 280 : props.p4pos===4 ? 380: props.p4pos===5 ? 480: props.p4pos===6 ? 480: props.p4pos===7 ? 480 :props.p4pos===8 ? 480:props.p4pos===9 ? 480: props.p4pos===10 ? 380:props.p4pos===11 ? 280: props.p4pos===12 ? 180: props.p4pos===13 ? 80:props.p4pos===14 ? 80:props.p4pos===15 ? 80:props.p4pos===16 ? 80:props.p4pos===17 ? 180:props.p4pos===18 ? 280:props.p4pos===19 ? 380:props.p4pos===20 ? 380:props.p4pos===21 ? 380: props.p4pos===22 ? 280:props.p4pos===23 ? 180:props.p4pos===24 ? 180: 280,
         
          top: props.p4pos===0?160:props.p4pos===1?160: props.p4pos===2 ? 160 : props.p4pos===3 ? 160 : props.p4pos===4 ? 160: props.p4pos===5 ? 160: props.p4pos===6 ? 260: props.p4pos===7 ? 360 :props.p4pos===8 ? 460:props.p4pos===9 ? 560: props.p4pos===10 ? 560:props.p4pos===11 ? 560: props.p4pos===12 ? 560: props.p4pos===13 ? 560:props.p4pos===14 ? 460:props.p4pos===15 ? 360:props.p4pos===16 ? 260:props.p4pos===17 ? 260:props.p4pos===18 ? 260:props.p4pos===19 ? 260:props.p4pos===20 ? 360:props.p4pos===21 ? 460: props.p4pos===22 ? 460:props.p4pos===23 ? 460:props.p4pos===24 ? 360: 360,
        }}
      ></span>
      

      <div className="boardContainer">
        <div className="row">
          <div className="col tile" id="1">
            1
          </div>
          <div className="col tile" id="2">
            2
          </div>
          <div className="col tile" id="3">
            3
          </div>
          <div className="col tile" id="4">
            4
          </div>
          <div className="col tile" id="5">
            5
          </div>
        </div>

        <div className="row">
          <div className="col tile" id="6">
            16
          </div>
          <div className="col tile" id="7">
            17
          </div>
          <div className="col tile" id="8">
            18
          </div>
          <div className="col tile" id="9">
            19
          </div>
          <div className="col tile" id="10">
            6
          </div>
        </div>

        <div className="row">
          <div className="col tile" id="11">
            15
          </div>
          <div className="col tile" id="12">
            24
          </div>
          <div className="col tile" id="13">
            DONE
          </div>
          <div className="col tile" id="14">
            20
          </div>
          <div className="col tile" id="15">
            7
          </div>
        </div>

        <div className="row">
          <div className="col tile" id="16">
            14
          </div>
          <div className="col tile" id="17">
            23
          </div>
          <div className="col tile" id="18">
            22
          </div>
          <div className="col tile" id="19">
            21
          </div>
          <div className="col tile" id="20">
           8
          </div>
        </div>

        <div className="row">
          <div className="col tile" id="21">
            13
          </div>
          <div className="col tile" id="22">
            12
          </div>
          <div className="col tile" id="23">
            11
          </div>
          <div className="col tile" id="24">
            10
          </div>
          <div className="col tile" id="25">
           9
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
