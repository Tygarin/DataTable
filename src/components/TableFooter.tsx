import { useEffect } from "react";
import { Data } from "../types/dataType";

interface Props {
    range: number[],
    setPage: Function,
    page: number,
    slice: Data[]
}

const TableFooter = ({ range, setPage, page, slice }: Props) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <div className='tableFooter'>
            {range.map((el: number, index: number) => (
                <button
                    key={index}
                    className={`button ${page === el ? 'activeButton' : 'inactiveButton'}`}
                    onClick={() => setPage(el)}
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default TableFooter;