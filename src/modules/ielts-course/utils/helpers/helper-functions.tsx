// Wrap <li>s with <ul> for proper bullet rendering
export function wrapListItems(description: string): string {
  if (description.includes("<li>")) {
    return `<ul class="list-disc pl-5 space-y-1">${description}</ul>`;
  }
  return description;
}
