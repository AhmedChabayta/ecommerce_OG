/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';

interface icons {
  Icon?: React.ReactNode;
  closedEnvelope?: React.ReactNode;
  text: string;
}

export default function AccountLink({ Icon, text, closedEnvelope }: icons) {
  const [envelopeState, setEnvelopeState] = useState<boolean>();
  return (
    <>
      {closedEnvelope ? (
        <div
          onMouseEnter={() => setEnvelopeState(true)}
          onMouseLeave={() => setEnvelopeState(false)}
          className="flex items-center space-x-2"
        >
          {envelopeState ? closedEnvelope : Icon}
          <p className="">{text}</p>
        </div>
      ) : (
        <div className="flex items-center space-x-2 ">
          {Icon}
          <p className="">{text}</p>
        </div>
      )}
    </>
  );
}
