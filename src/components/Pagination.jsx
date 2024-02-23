
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pageNumbers.map((number) => (
                    <li className="page-item">
                        <a
                            href="#"
                            className={number === currentPage ? 'page-link active' : 'page-link'}
                            onClick={() => onPageChange(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}