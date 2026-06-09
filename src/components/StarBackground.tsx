export default function StarBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-slate-950" />

      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139,92,246,.18), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(59,130,246,.18), transparent 40%),
            linear-gradient(to bottom, #020617, #0f172a)
          `,
        }}
      />

      <div className="stars fixed inset-0 -z-10" />
    </>
  );
}
