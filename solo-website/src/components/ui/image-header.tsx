// components/MyImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';

interface ImagemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Imagem: React.FC<ImagemProps> = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Imagem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Imagem;