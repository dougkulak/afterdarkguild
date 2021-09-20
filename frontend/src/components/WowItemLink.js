export function WowItemLink({
  num,
  name,
  size = null,
  block = false,
  rename = false,
}) {
  return (
    <span>
      <a
        style={{display: block ? 'block' : 'inline-block'}}
        rel={'noreferrer'}
        target={'_blank'}
        href={`https://tbc.wowhead.com/item=${num}`}
        data-wh-rename-link={rename}
        data-wh-icon-size={size}>
        {name}
      </a>
    </span>
  );
}
