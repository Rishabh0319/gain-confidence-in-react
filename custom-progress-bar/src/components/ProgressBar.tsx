import type React from "react";
import './ProgressBar.css'

interface ProgressBarProps {
    percent: number;
    status: 'normal' | 'active' | 'exception' | 'success';
    strokeColor?: string;
    showInfo?: boolean;
    strokeWidth?: number;
    trailColor?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    percent,
    status = 'normal',
    showInfo = true,
    strokeColor,
    trailColor = '#f5f5f5',
    strokeWidth = 8,
}) => {
    const getStatusColor = () => {
        if (strokeColor) return strokeColor;

        switch (status) {
            case 'success':
                return '#52c41a'; // green
            case 'exception':
                return '#ff4d4f'; // red
            case 'active':
                return '#1890ff'; // blue
            default:
                return '#1890ff';
        }
    };

    return (
        <div
            className="progress-container"
            style={{
                backgroundColor: trailColor,
                height: strokeWidth,
            }}
        >
            <div
                className="progress-bar"
                style={{
                    width: `${percent}%`,
                    backgroundColor: getStatusColor(),
                    height: strokeWidth,
                }}
            />
            {showInfo && (
                <span className="progress-info">{percent}%</span>
            )}
        </div>
    );
};

export default ProgressBar;