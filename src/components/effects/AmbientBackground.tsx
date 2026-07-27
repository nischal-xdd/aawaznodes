export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-[300px] -left-[200px] w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,154,61,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-[40%] -right-[200px] w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(69,208,255,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(68,209,122,0.10), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}
