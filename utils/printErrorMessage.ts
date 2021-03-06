const printErrorMessage = (functionName: string, error: Error): void => {
    console.error(`\nš š š š š š š š š š š š  Error in ${functionName} š š š š š š š š š š š š \n`)
    console.error('Error Name:', error.name);
    console.error('Message:', error.message);
    console.error('Error Stack:', error.stack);
    console.error(`\nš š š š š š š š š š š š  Error in ${functionName} š š š š š š š š š š š š \n`)
}

export default printErrorMessage;