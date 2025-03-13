export const determineColour = (temp) => {
    switch (true) {
        case temp > 100:
            return 'temp-scorch';
        case temp > 90:
            return 'temp-hot';
        case temp > 80:
            return 'temp-warm';
        case temp > 70:
            return;
        case temp > 60:
            return 'temp-cool';
        case temp > 50:
            return 'temp-cold';
        default:
            return 'temp-freeze';
    }
}