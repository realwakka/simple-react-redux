export const TOGGLE = 'TOGGLE';
export const INCREMENT = 'INCREMENT';

export function toggle_action() {
    return { type: TOGGLE};
}

export function increment(count) {
    return { type: INCREMENT, count}
}