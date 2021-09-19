export function WowItemLink({num, name}) {
  return (
    <span>
      <br />
      <a href={`https://tbc.wowhead.com/item=${num}`}>name</a>
    </span>
  );
}
