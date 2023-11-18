import { css } from '@/styled-system/css';
import { center, flex } from '@/styled-system/patterns';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header
      className={flex({
        position: 'sticky',
        left: 0,
        top: 0,
        zIndex: 50,
        justifyContent: 'space-between',
        shadow: 'md',
        shadowColor: 'gray.700',
        color: 'neutral.700',
        bg: 'rgb(0,0,30)',
      })}
    >
      <Link
        href={'/'}
        className={center({
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'xl',
          fontWeight: 'bold',
          color: '#FFF',
          textTransform: 'none',
        })}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/android-chrome-512x512.png"
            alt="icon"
            className={css({
              animation: 'none',
              position: 'absolute',
              left: 2,
              top: 0,
              h: '64px',
              w: '64px',
            })}
          />
        }
        <span className={css({ marginLeft: '68px' })}>うまノート</span>
      </Link>
    </header>
  );
};
