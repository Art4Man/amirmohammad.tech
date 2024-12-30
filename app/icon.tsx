import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
    <div
      style={{
        fontSize: 17,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF', // white
        fontWeight: 'bold',
        fontFamily: 'monospace',
        background: 'transparent',
      }}
    >
      ASA
    </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config above in the Image Response
      ...size,
    }
  )
}