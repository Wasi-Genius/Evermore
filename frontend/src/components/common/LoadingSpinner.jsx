/**
 * Small utility presentational component that renders a loading spinner.
 * Props:
 * - `size` (string): one of `sm | md | lg` to control visual size.
 */
const LoadingSpinner = ({ size = "md" }) => {
	const sizeClass = `loading-${size}`;
	return <span className={`loading loading-spinner ${sizeClass}`} />;
};

export default LoadingSpinner;
