import styles from "./Pagination.module.css";
import Link from "next/link";
import Image from "next/image";

type PaginationProps = {
  totalCount: number;
  postPerPage: number;
  page: number;
};

export const Pagination = ({
  totalCount,
  postPerPage,
  page,
}: PaginationProps) => {
  const perPage = postPerPage;
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <Link
          className={`${styles.arrow} ${styles.prev}`}
          href={`/blog/page/${page - 1}`}
        >
          <Image
            src="/common/page-arrow.svg"
            alt=""
            width="9"
            height="13"
            className={styles.arrowImage}
          />
        </Link>
      )}
      <div className={styles.numbers}>
        {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
          <Link
            className={`${styles.number} ${page === number && styles.isCurrent}`}
            href={`/blog/page/${number}`}
            key={index}
          >
            {number}
          </Link>
        ))}
      </div>
      {page < Math.ceil(totalCount / perPage) && (
        <Link
          className={`${styles.arrow} ${styles.next}`}
          href={`/blog/page/${page + 1}`}
        >
          <Image
            src="/common/page-arrow.svg"
            alt=""
            width="9"
            height="13"
            className={styles.arrowImage}
          />
        </Link>
      )}
    </div>
  );
};
