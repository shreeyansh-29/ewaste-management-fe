import React from "react";
import "./signUp.css";
import ReactTooltip from "react-tooltip";
import TimeRange from "react-time-range";

function dropOffTimeField({...props}) {
  return (
    <div>
      <div className="inputGroup">
        <label
          htmlFor="time"
          data-tip
          data-for="registerTip"
          className="timelabel dropOffTime"
        >
          Drop-Off Time <i className="text-danger">*</i>
        </label>
        <ReactTooltip id="registerTip" place="bottom" effect="solid">
          Drop-Off is required for drop off delivery from customers
        </ReactTooltip>
        <TimeRange
          onStartTimeChange={props.returnFunctionStartTime}
          onEndTimeChange={props.returnFunctionEndTime}
          startMoment={props.startTime}
          endMoment={props.endTime}
          use24Hours={true}
          minuteIncrement="60"
          className="time"
        />
      </div>
    </div>
  );
}

export default dropOffTimeField;
