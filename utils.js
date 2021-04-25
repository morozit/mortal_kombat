export const getRandom = (num) => {
  return Math.ceil(Math.random() * num);
}

// !!!! создание елементов DOM
export const createElement = (tag, className) => {
  let $tag = document.createElement(tag);
  $tag.classList.add(className);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}