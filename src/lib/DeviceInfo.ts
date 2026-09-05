export type KeySize = {
	width: number;
	height: number;
	span: number;
};

export type DeviceInfo = {
	id: string;
	name: string;
	rows: number;
	columns: number;
	encoders: number;
	touchpoints: number;
	infobars: number;
	type: number;
	key_size: KeySize | null;
	key_sizes: Record<string, KeySize>;
};
