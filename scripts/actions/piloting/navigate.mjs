export function navigate(SingleCheckAction) {
    const PREFIX = "SF2E.Actions.Navigate";
    return new SingleCheckAction({
        description: `${PREFIX}.Description`,
        name: `${PREFIX}.Title`,
        notes: [
            {outcome: ["criticalSuccess"], text: `${PREFIX}.Notes.criticalSuccess`},
            {outcome: ["success"], text: `${PREFIX}.Notes.success`},
        ],
        rollOptions: ["action:navigate"],
        section: "skill",
        slug: "navigate",
        statistic: "piloting",
        traits: ["exploration", "secret"],
    });
}
