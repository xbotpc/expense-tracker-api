const printErrorMessage = (functionName: string, error: Error): void => {
    console.error(`\n🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗 Error in ${functionName} 🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗\n`)
    console.error('Error Name:', error.name);
    console.error('Message:', error.message);
    console.error('Error Stack:', error.stack);
    console.error(`\n🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕 Error in ${functionName} 🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕🠕\n`)
}

export default printErrorMessage;