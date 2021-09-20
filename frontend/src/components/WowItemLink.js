export function WowItemLink({num, name, size = null, rename = false}) {
  return (
    <span>
      <a
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
