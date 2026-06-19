import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          color: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <span>Barber Labs</span>
          <span>Book</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 112,
            lineHeight: 0.9,
            letterSpacing: -6,
            fontWeight: 800,
          }}
        >
          <span>Haircuts /</span>
          <span>by appointment</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #dddddd',
            paddingTop: 28,
            color: '#4a4a4a',
            fontSize: 26,
          }}
        >
          <span>Clean cuts, clear schedule, no waiting.</span>
          <span>Jatinangor</span>
        </div>
      </div>
    ),
    size
  );
}
