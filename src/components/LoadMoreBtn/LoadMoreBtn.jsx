import s from "../LoadMoreBtn/LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button
      type="button"
      onClick={() => {
        onLoadMore();
      }}
      className={s.button}>
      Load More
    </button>
  );
}
