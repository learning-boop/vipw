import { useInView } from '../hooks/useInView';

/** Fades and lifts its children into place when they scroll into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
