import { DeleteButtonStyled } from './deleteButtonSyled'

type props = {
    index: number
    deleteFunction: (index: number) => void
}

export const DeleteButton = ({index, deleteFunction}: props) => {

    return (
        <DeleteButtonStyled>
            <div className='button' onClick={() => {deleteFunction(index)}}>
                delete
            </div>
        </DeleteButtonStyled>
    )
}