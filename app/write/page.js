export default function Write() {
  return (
    <div className="p-20">
      <h4>Write Post</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title" />
        <input name="content" placeholder="content" />
        <button type="submit">Button</button>
      </form>
    </div>
  );
}
