import PropTypes from 'prop-types';

/**
 * Smart component that renders skill icons from different sources:
 * - SVG code (stored in Firestore)
 * - URL (CDN or Firebase Storage)
 * - Auto-detects based on content
 */
const SkillIcon = ({ icon, iconType, alt = 'skill icon', className = '' }) => {
    if (!icon) return null;

    // Auto-detect if iconType is not provided
    const detectType = () => {
        if (iconType) return iconType;
        if (icon.startsWith('http://') || icon.startsWith('https://')) return 'url';
        if (icon.includes('<svg')) return 'code';
        return 'url'; // fallback
    };

    const type = detectType();

    // Render based on type
    if (type === 'code') {
        // SVG code stored in Firestore
        return (
            <div
                className={`${className} overflow-hidden [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto`}
                dangerouslySetInnerHTML={{ __html: icon }}
            />
        );
    } else {
        // URL (CDN or Firebase Storage)
        return (
            <img
                src={icon}
                alt={alt}
                className={`${className} max-w-full max-h-full w-auto h-auto object-contain`}
            />
        );
    }
};

SkillIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    iconType: PropTypes.oneOf(['file', 'url', 'code']),
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default SkillIcon;
