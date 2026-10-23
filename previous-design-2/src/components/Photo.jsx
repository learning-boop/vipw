/**
 * Shows a real photo when `src` is set, otherwise a labelled placeholder
 * so the layout holds until the institute's photographs are added.
 */
export default function Photo({ src, alt = '', label, className = '', dark = false }) {
  if (src) {
    return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" decoding="async" />;
  }
  return (
    <div className={`photo photo--placeholder${dark ? ' photo--dark' : ''} ${className}`} role="img" aria-label={label}>
      <span className="photo__label mono">[{label}]</span>
    </div>
  );
}
