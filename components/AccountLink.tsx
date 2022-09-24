import { useState } from 'react';

interface Props {
  Icon: JSX.Element;
  closedEnvelope?: JSX.Element;
  text: string;
}

export default function AccountLink({ Icon, text, closedEnvelope }: Props) {
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
      {/* <div
        onMouseEnter={() => setEnvelopeState(true)}
        onMouseLeave={() => setEnvelopeState(false)}
        className="flex items-center space-x-2"
      >
        {envelopeState ? closedEnvelope : Icon}
        <p className="">{text}</p>
      </div> */}
    </>
  );
}
