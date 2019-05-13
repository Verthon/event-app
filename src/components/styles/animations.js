import {keyframes} from 'styled-components';

export const fadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`;

export const slideDown = keyframes`
	0% {
		transform: translateY(-100%);
	}
	50%{
		transform: translateY(8%);
	}
	65%{
		transform: translateY(-4%);
	}
	80%{
		transform: translateY(4%);
	}
	95%{
		transform: translateY(2%);
	}			
	100% {
		transform: translateY(0%);
	}		
`;

export const spin = keyframes`
  to { transform: rotate(360deg); }
}
  to { transform: rotate(360deg); }
`;