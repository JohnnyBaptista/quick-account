/* eslint-disable no-undef */
import { Card, ImageContainer, Title } from './CreditorStyles';

interface CredtiorProps {
    name: string;
}

const Creditor: React.FC<CredtiorProps> = ({children, name}) => {
  return (
    <Card>
        <ImageContainer>
            <p>image</p>
        </ImageContainer>
            <Title>{name}</Title>
        {children}
    </Card>
  );
}

export default Creditor;