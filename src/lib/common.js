/**
 * Return the correct syntax JavaScript uses to identify data
 * attribute.
 * - Add 'data-' prefix to 'attribute' if missing
 *
 * @param attribute {string} Data attribute text
 */
export const dataAttrName = (attribute) => {
	if(attribute.startsWith('data-')) return attribute
	return 'data-' + attribute;
}