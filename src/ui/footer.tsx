import { css } from '@/styled-system/css';
import { center } from '@/styled-system/patterns';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer
      className={css({
        backgroundColor: '#f7fafc',
        py: 14,
      })}
    >
      <Link
        href={'/'}
        className={center({
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'none',
          gap: 8,
        })}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/android-chrome-512x512.png"
            alt="icon"
            className={css({
              animation: 'none',
              position: 'relative',
              left: 2,
              top: 0,
              h: '64px',
              w: '64px',
              rounded: 'full',
            })}
          />
        }
        <span
          className={css({
            fontSize: 'xl',
            fontWeight: 'bold',
            color: 'rgb(0,0,30)',
          })}
        >
          うまノート
        </span>
      </Link>
    </footer>
  );
};
