export function Logotype(props) {
  return (
    <svg viewBox="0 0 200 40" aria-hidden="true" {...props}>
      <text 
        x="0" 
        y="28" 
        className="fill-meldrum-green-400" 
        style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'system-ui, sans-serif' }}
      >
        Meldrum Labs
      </text>
    </svg>
  );
}
