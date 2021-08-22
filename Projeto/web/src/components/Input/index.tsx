import { InputHTMLAttributes } from "react"
import { IconBaseProps } from "react-icons"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ComponentType<IconBaseProps>;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, name, type, ...rest }) => {
    return (
        <Container>
            {Icon && <Icon size={24} />}
            <input name={name} type={type} {...rest} />
        </Container>
    )
}