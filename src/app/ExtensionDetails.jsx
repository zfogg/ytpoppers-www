const RECOMMENDED_EXTENSIONS = [
    'formulahendry.auto-close-tag',
    'aaron-bond.better-comments',
    'mikestead.dotenv',
    'EditorConfig.EditorConfig',
    'dbaeumer.vscode-eslint',
    'MikeBovenlander.formate',
    'donjayamanne.githistory',
    'wix.vscode-import-cost',
    'sburg.vscode-javascript-booster',
    'christian-kohler.npm-intellisense',
    'esbenp.prettier-vscode',
    'bradlc.vscode-tailwindcss',
    'Gruntfuggly.todo-tree',
    'ChakrounAnas.turbo-console-log',
    'codeandstuff.package-json-upgrade',
    'moalamri.inline-fold',
    'KnisterPeter.vscode-commitizen',
    'yzhang.markdown-all-in-one'
];

const fetchExtensionDetails = async (extension) => {
    const response = await fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json;api-version=3.0-preview.1'
        },
        body: JSON.stringify({
            filters: [
                {
                    criteria: [{ filterType: 7, value: extension }]
                }
            ],
            flags: 914
        })
    });

    const data = await response.json();
    const extensionData = data.results[0].extensions[0];

    // Extract relevant details
    const downloadCount = extensionData.statistics.find((stat) => stat.statisticName === 'install').value;
    const iconUri = extensionData.versions[0].files.find(
        (file) => file.assetType === 'Microsoft.VisualStudio.Services.Icons.Default'
    ).source;

    return { name: extension, displayName: extensionData.displayName, downloadCount, iconUri };
};

const ExtensionDetails = async () => {
    const extensionDetails = await Promise.all(RECOMMENDED_EXTENSIONS.map(fetchExtensionDetails));
    return (
        <div className='grid grid-cols-9 gap-6'>
            {extensionDetails.map((extension) => {
                return (
                    <div key={extension.name} className='group relative inline-block'>
                        <img className='size-9 hover:cursor-pointer' src={extension.iconUri} alt={extension.name} />
                        <div className='absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform space-y-1.5 whitespace-nowrap rounded bg-gray-800 px-3 py-3 text-sm text-white group-hover:block'>
                            <h3 className='text-lg'>{extension.displayName}</h3>
                            <p>Downloads: {extension.downloadCount.toLocaleString()}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExtensionDetails;
